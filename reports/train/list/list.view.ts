namespace $.$$ {
	export class $mpk_tss_reports_train_list extends $.$mpk_tss_reports_train_list {
		@$mol_mem
		domain() {
			return this.$.$mpk_tss_reports_domain_trains.make({
				filter_number: (next?: string ) => this.filter_number(),
				filter_resolution: () => {
					return this.filter_warning()
						? $mpk_tss_reports_domain_resolution.warning
						: null
				},
			})
		}
		
		main_blended() {
			return !!this.report_current_id()
		}

		@$mol_mem
		report_links() {
			return this.domain().reports().map(report => this.Report_link(report.id()))
		}

		report(id: string) {
			return this.domain().report(id)
		}

		filter_number( next? : string ) {
			return this.$.$mol_state_arg.value( this.state_key( 'trains' ) , next === '' ? null : next) || ''
		}

		@$mol_mem
		filter_warning(next?: boolean) {
			const param = this.$.$mol_state_arg.value(
				this.state_key( 'trains_warning' ),
				next ? '1' : null
			)

			return !!param
		}

		report_current_id( next? : string ) {
			return this.$.$mol_state_arg.value( this.state_key( 'report' ) , next ) || ''
		}

		pages() {
			return super.pages().concat(this.Details_pages())
		}

		Details_pages() {
			if (!this.report_current_id()) return []
			return this.Report_details(this.report_current_id()).pages()
		}

		focus_main() {
			this.Main().focused(true)
		}
	}
}
