import { merge } from 'webpack-merge';
import common from './webpack.common.js';

export default merge(common, {
	mode: 'development',
	devtool: 'eval-cheap-module-source-map',
	devServer: {
		watchFiles: ['./src/template.html'],
	},
	cache: {
		type: "filesystem"
	}
});
