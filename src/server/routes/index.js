'use strict'

import Router from 'koa-router'

import getRoute from './get'
import { login, logout } from './session'
import { createResource, deleteResource, updateResource } from './resource'
import updateContractValue from './contract'

const router = new Router()

// Auth
router.post('/sessions/create', login)
router.get('/logout', logout)

// myResource
router.post('/myresource', createResource)
router.post('/myresource/*/update', updateResource)
router.post('/myresource/*/delete', deleteResource)

// Contract
router.post('/contract', updateContractValue)

// Get routes
router.get('/*', getRoute)

export default router
