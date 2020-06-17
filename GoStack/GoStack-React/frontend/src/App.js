import React, { useState } from 'react'

import './App.css';
import backgroundImage from './assets/backgroud.jpg'

import Header from './components/Header'

function App() {
    const [projects, setProjects] = useState(['Desenvolvimento de app', 'Front-end Web'])

    function handleAddProject() {
        setProjects([...projects, `Novo projeto ${Date.now()}`])

        console.log(projects)
    } 

    return (
        <>
            <Header title="Projects" />

            <img width={300}  src={backgroundImage} alt=""/>

            <ul>
                {projects.map(project => <li key={project}>{project}</li>)}
            </ul>

            <button type="button" onClick={handleAddProject}>Adicionar projeto</button>
        </>
    )
}

export default App