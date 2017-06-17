class Api::ApiController < ApplicationController

	def booklist
    @booklist = Booklist.all
    logger.info "Booklist: #{@booklist}"
    render :json => @booklist
  end

end
