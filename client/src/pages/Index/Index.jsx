// Libs
import React from 'react'

// Utils
import axios from '../../utils/axios'

// Stylesheet
import './Index.scss'

// Components
import VisitChrono from '../../components/VisitChrono/VisitChrono'

export default function Index() {

	console.log(process.env.REACT_APP_API_URL)
	return (
		<>
			<div>Index</div>
			<VisitChrono />
		</>
	)
}