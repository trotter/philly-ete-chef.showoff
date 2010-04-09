!SLIDE subsection

# Under the hood

!SLIDE

# Simple MySQL recipe

    @@@ ruby
    # cookbooks/mysql/recipes/default.rb
    install_package "mysql-devel"
    install_package "mysql-client"
    install_package "mysql-server"

!SLIDE 

# Simple Apache Virtual Host

    @@@ erb
    <VirtualHost *:80>
      ServerName <%= @params[:server_name] %>
      DocumentRoot <%= @params[:docroot] %>
      RewriteEngine On
      
      <Directory <%= @params[:docroot] %>>
        Options FollowSymLinks
        AllowOverride None
        Order allow,deny
        Allow from all
      </Directory>
    </VirtualHost>

