import React from 'react'
import Form from './Form'
import Posts from './Posts'

import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getPosts } from '../actions/posts'

const Home = () => {
    const [currentId, setCurrentId] = useState(null);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getPosts());
    }, [currentId, dispatch]);
    return (
    <div className="grid lg:grid-cols-3 gap-4 md:grid-cols-2 grid-cols-1">
        <Form currentId={currentId} setCurrentId={setCurrentId} />
        <div className="col-span-1 lg:col-span-2">
            <Posts setCurrentId={setCurrentId} />
        </div>
    </div>
    )
}

export default Home