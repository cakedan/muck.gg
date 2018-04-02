const m = require('mithril');

const Page = require('../page');

class CustomPage extends Page
{
	constructor(app)
	{
		super(app, {
			path: '/',
			class: 'home'
		});
	}

	view()
	{
		return m('div', {class: 'head text-center'}, [
			m('img', {src: '/assets/images/logo.png', style: 'height: 128px; width: 128px;'}),
			m('h1', 'Muck Man'),
			m('span', {class: 'small-text'}, 'no muck allowed'),
			m('div', {class: 'btn-group'}, [
				m('a', {href: '/invite', class: 'btn'}, 'Invite'),
				m('a', {href: '/discord', class: 'btn'}, 'Discord')
			])
		]);
	}
}

module.exports = CustomPage;