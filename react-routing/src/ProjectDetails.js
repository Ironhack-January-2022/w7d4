import React from 'react'
import { myProjects } from './Projects';
import { useParams } from 'react-router-dom';

export default function ProjectDetails(props) {

	const params = useParams()

	const projectId = params.id

	console.log(projectId)

	const project = myProjects.find(project => project.id === projectId)

	return (
		<>
			<h1>Project Details</h1>
			<h3>Name: {project.name}</h3>
			<h3>Tech: {project.technologies}</h3>
			<h4>{project.description}</h4>
		</>
	)
}
