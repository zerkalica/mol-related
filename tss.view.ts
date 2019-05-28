namespace $.$$ {
	export class $mpk_tss extends $.$mpk_tss {
		title() {
			return super.title().replace('%terminal_number', this.terminal_number())
		}

		terminal_number() {
			return '123'
		}

		terminal_formatted_label() {
			return this.terminal_text().replace('%terminal_number', this.terminal_number())
		}

		context_sub() {
			return this.$.$mol_ambient({
				$mpk_tss_pereferial_domain: $mpk_tss_pereferial_domain_mock,
				$mpk_tss_reports_domain: $mpk_tss_reports_domain_mock,
			})
		}
	}

	export class $mpk_tss_main extends $.$mpk_tss_main {
		Pereferial() {
			const Pereferial = super.Pereferial()
			// see https://github.com/eigenmethod/mol/issues/324
			Pereferial.$ = this.$
			return Pereferial
		}

		Reports() {
			const Reports = super.Reports()
			// see https://github.com/eigenmethod/mol/issues/324
			Reports.$ = this.$
			return Reports
		}

		copyright() {
			return super.copyright().replace('%year', '' + new Date().getFullYear())
		}

		entered( next? : boolean ) {
			return this.$.$mol_state_session.value( `${ this }.entered()` , next ) || false
		}

		Logged_user() {
			if (!this.entered()) return null

			return this.User_link()
		}

		logout_click() {
			this.logged_email(null)
			this.entered(false)
		}

		menu_items() {
			return Object.keys(this.menu_pages()).map(id => this.Menu_item(id))
		}

		menu_page_arg(id: string) {
			return {page: id}
		}

		@$mol_mem
		logged_email(next?: string) {
			return this.$.$mol_state_session.value( this.state_key( 'user' ) , next ) || ''
		}

		menu_page_title(id: string) {
			return this.menu_pages()[id].title()
		}

		page_id(next?: string) {
			return this.$.$mol_state_arg.value( this.state_key( 'page' ) , next ) || ''
		}

		sidebar_items() {
			if( !this.entered() ) return [ this.Login() ]

			return [this.Menu()]
		}

		pages() {
			if( !this.entered() ) return [ this.Sidebar() ]

			const id = this.page_id() || 'summary'
			const page = this.menu_pages()[id]
			const pages = page && page.pages ? page.pages() : [page]

			return [
				this.Sidebar(),
				...pages,
			]
		}
	}
}