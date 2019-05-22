namespace $.$$ {
	export class $mpk_tss_pereferial extends $.$mpk_tss_pereferial {
		@$mol_mem
		domain() {
			return new $mpk_tss_pereferial_domain_mock()
		}

		@$mol_mem
		unit_links() {
			return this.domain().units().map(unit => this.Unit_link(unit.id()))
		}

		unit(id: string) {
			return this.domain().unit(id)
		}

		unit_current_id( next? : string ) {
			return $mol_state_arg.value( this.state_key( 'unit' ) , next ) || ''
		}

		subpages() {
			return [
				this.unit_current_id() && this.Unit_details(this.unit_current_id())
			]
		}

		destructor() {
			this.unit_current_id(null)
		}
	}
}
