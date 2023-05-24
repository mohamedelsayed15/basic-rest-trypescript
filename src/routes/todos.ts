import { Router } from 'express'
import { Todo } from '../models/todos'
import { todo } from 'node:test';

const router = Router()

type ToDO = { todo: string; completed: boolean }

let todos: Todo[] = []

router.get('/', (req,res,next) => {
    res.status(200).json({todos})
})

router.post('/', (req, res, next) => {
    let body = req.body as { todo: string; completed: boolean }
    const todo: Todo = {
        id: new Date().toISOString(), 
        todo: body.todo,
        completed:body.completed
    }
    todos.push(todo)

    res.status(201).json({
        todo
    })
})

router.put('/todo/:todoId', (req,res,next) => {
    const id = req.params.todoId
    let found = false
    for (let i = 0; i < todos.length; i++){

        if (todos[i].id === id) {

            todos[i] = {
                id: new Date().toISOString(), 
                todo: req.body.todo,
                completed:req.body.completed
            }

            found = true
            break
        }

    }

    if(found === false) {
        return res.status(404).json({
            error: "couldn't find the specified todo"
        })
    } 

    res.status(201).json({
        message : "created"
    })
})

router.delete('/delete-a-todo-/:id', (req, res, next) => {

    let found = true

    todos = todos.filter(todo => todo.id !== req.params.id)

    res.status(200).json({
        message: "deleted todo"
    })

})

export default router