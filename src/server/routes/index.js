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
router.post('/myresource/:id/update', updateResource)
router.post('/myresource/:id/delete', deleteResource)

// Contract
router.post('/contract', updateContractValue)

// Get routes
router.get('/', getRoute('Home'))
router.get('/login', getRoute('Login'))
router.get('/about', getRoute('About'))
router.get('/contract', getRoute('Contract'))
router.get('/myresource', getRoute('MyResource'))
router.get('/myresource/new', getRoute('MyResource/New'))
router.get('/myresource/:id/edit', getRoute('MyResource/Edit'))

export default router
