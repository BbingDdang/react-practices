import React,{useState, useEffect} from 'react';
import Card from './Card';
import {Card_List} from './assets/scss/CardList.scss'
import './assets/scss/CardList.scss';

function CardList({title}) {
    

    const [posts,setPosts] = useState([]);

    const [tasks, setTasks] = useState([])

    const fetchPost = async () => {
        try {
            const response = await fetch(`/api`, {
                method: 'get',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: null
            });

            if(!response.ok) {
                throw new Error(`${response.status} ${response.statusText}`);
            }

            const json = await response.json();

            if(json.result !== 'success') {
                throw new Error(json.message);
            }
            console.log(json);

            setPosts(json.data.filter((v) => {
                console.log(title,v.status);
                if (title === 'Todo' && v.status === 'ToDo'){
                    return true;
                }
                else if(title === 'Doing' && v.status === 'Doing') return true;
                else if(title === 'Done' && v.status === 'Done') return true;
                else return false;
            }));

        } catch(err) {
            console.error(err);
        }
    }

    const fetchTask = async () => {
        try {
            const response = await fetch(`/api/task`, {
                method: 'get',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: null
            });

            if(!response.ok) {
                throw new Error(`${response.status} ${response.statusText}`);
            }

            const json = await response.json();

            if(json.result !== 'success') {
                throw new Error(json.message);
            }

            setTasks(json.data);
        } catch(err) {
            console.error(err);
        }
    }

    const addTask = async (task) => {
        try {
            const response = await fetch('/api/task', {
                method: 'post',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(task)
            });

            if(!response.ok) {
                throw new Error(`${response.status} ${response.statusText}`);
            }

            const json = await response.json();

            if(json.result !== 'success') {
                throw new Error(json.message);
            }

            setTasks([json.data, ...tasks]);
        } catch(err) {
            console.error(err);
        }
    };

    const updateTask = async (task) => {
        try {
            const response = await fetch('/api/task', {
                method: 'put',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(task)
            });

            if(!response.ok) {
                throw new Error(`${response.status} ${response.statusText}`);
            }

            const json = await response.json();

            if(json.result !== 'success') {
                throw new Error(json.message);
            }

            setTasks(prev=> prev.map(v=>v.no == task.no  ? {...v, done: v.done == 'Y' ? 'N' : 'Y'} : v));
        } catch(err) {
            console.error(err);
        }
    };

    const deleteTask = async (task) => {
        console.log(task.no);
        try {
            const response = await fetch(`/api/task?no=${task.no}`, {
                method: 'delete',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            });

            if(!response.ok) {
                throw new Error(`${response.status} ${response.statusText}`);
            }

            const json = await response.json();

            if(json.result !== 'success') {
                throw new Error(json.message);
            }

            setTasks(prev=> prev.filter(v=>v.no !== task.no));
        } catch(err) {
            console.error(err);
        }
    };

    useEffect(() => {
        fetchPost()
        fetchTask()
    },[])

    return (
        <div className={Card_List}>
            <h1>{title}</h1>
            {posts.map(post => (
                <Card key={post.no} 
                card = {post} 
                tasks = {tasks} 
                fetchTask = {fetchTask} 
                fetchPost = {fetchPost} 
                addTask = {addTask} 
                updateTask = {updateTask} 
                deleteTask = {deleteTask} />
            ))}
            
        </div>
    );
}

export default CardList;