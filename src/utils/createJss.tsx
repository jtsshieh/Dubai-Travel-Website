import { create } from 'jss';
import { jssPreset } from '@material-ui/core/styles';
import jssComposes from 'jss-plugin-compose';

export const jss = create({
	plugins: [...jssPreset().plugins, jssComposes()],
});
