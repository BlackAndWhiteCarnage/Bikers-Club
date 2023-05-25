/**
 * External dependencies
 */
import { createPortal } from 'react-dom';

const Portal = ({ children, rootElement = document.body }) =>
	createPortal(children, rootElement);

export default Portal;
