import { registPageInstance } from '../scripts/utils'
import { Page } from '../types/types'

class Home implements Page {
	constructor() {
		console.log('home')
	}
	dispose() {}
}

registPageInstance(new Home())
