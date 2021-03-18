import ReactMarkdown from 'react-markdown';
import renderers from '../../MaterialMDRenderer';
import PalmJumeirahImage from '../../images/palm_jumeirah.jpg';
import { TopRoute } from '../../components/RouteConstants';

const article = `The Palm Jumeirah is a collection of man made islands in Dubai. On the islands, there are multiple hotels and resorts. A popular one is Atlantis.



You can get to the Palm through the Dubai Metro or by car. 
`;

export function PalmJumeirah() {
	return (
		<>
			<ReactMarkdown escapeHtml={false} renderers={renderers}>
				{article}
			</ReactMarkdown>
		</>
	);
}

export const PalmJumeirahRoute: TopRoute = {
	name: 'Palm Jumeirah',
	path: '/palm-jumeirah',
	component: PalmJumeirah,
	header: { image: PalmJumeirahImage },
};
