import React from 'react';
import { useContext } from 'react';
import AlertContext from './AlertContext';
import Alert from './Alert';

const Alerts = () => {
	const { alerts, removeAlert } = useContext(AlertContext);

	return (
		<div className="fixed right-1 ">
			{alerts.map(a => <Alert key={a.Id} alert={a} removeAlert={removeAlert} />)}
		</div>
	);
};
export default Alerts;
