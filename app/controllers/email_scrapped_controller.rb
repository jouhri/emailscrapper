class EmailScrappedController < ApplicationController

	def new
		EmailScrapped.create({email: params[:email]})
		head :ok
	end

end
