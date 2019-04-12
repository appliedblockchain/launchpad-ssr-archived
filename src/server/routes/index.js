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
router.get('/', getRoute('home'))
router.get('/login', getRoute('login'))
router.get('/about', getRoute('about'))
router.get('/contract', getRoute('contract'))
router.get('/myresource', getRoute('myresource'))
router.get('/myresource/new', getRoute('myresource/new'))
router.get('/myresource/:id/edit', getRoute('myresource/edit'))
router.get('*', getRoute('notFound'))

export default router
