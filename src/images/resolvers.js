import { generalRequest, getRequest } from '../utilities';
import { url, port, entryPoint, entryType, entryOwner, entryTypeOwner } from './server';

const URL = `http://${url}:${port}/${entryPoint}`;
const URLTYPE = `http://${url}:${port}/${entryType}`;
const URLOWNER = `http://${url}:${port}/${entryOwner}`;
const URLTYPEOWNER= `http://${url}:${port}/${entryTypeOwner}`;

const resolvers = {
	Query: {
		allImages: (_) =>
			getRequest(URL, ''),
		imageById: (_, { id }) =>
			generalRequest(`${URL}/${id}`, 'GET'),
		imageByType: (_, { imageabletype }) =>
			generalRequest(`${URLTYPE}/${imageabletype}`, 'GET'),
		imageByOwner: (_, { imageableid }) =>
			generalRequest(`${URLOWNER}/${imageableid}`, 'GET'),
		imageByTypeAndOwner: (_, { imageabletype, imageableid }) =>
			generalRequest(`${URLTYPEOWNER}/${imageabletype}/${imageableid}`, 'GET'),
	},
	Mutation: {
		createImage: (_, { image }) =>
			generalRequest(`${URL}`, 'POST', image),
		deleteImage: (_, { id }) =>
			generalRequest(`${URL}/${id}`, 'DELETE')
	}
};

export default resolvers;
