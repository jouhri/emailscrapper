class CreateEmailScrappeds < ActiveRecord::Migration
  def change
    create_table :email_scrappeds do |t|
      t.string :email

      t.timestamps
    end
  end
end
