!SLIDE subsection

# Architecture #

!SLIDE bullets incremental

# Key Components

* Nodes
* Roles
* Cookbooks

!SLIDE bullets incremental directory

# A Chef Repo #

* config/
* cookbooks/
* roles/
* site-cookbooks/ (sometimes)
* certificates/ (not important for solo)

!SLIDE bullets incremental directory

# A Cookbook #

* README.rdoc
* recipes/
* files/
* templates/
* attributes/

!SLIDE bullets incremental directory

# A Cookbook #

* metadata.rb
* definitions/
* libraries/

!SLIDE

# A Simple Recipe #

    @@@ruby
    # cookbooks/profile/recipes/default.rb

    home = ENV['HOME']
    git "#{home}/.profile.d" do
      # node[:profile][:repo] is set in the config
      # => "git://github.com/matschaffer/profile.git"
      repository node[:profile][:repo]
      action :sync
    end
    
    link "#{home}/.profile" do
      to "#{home}/.profile.d/init"
    end

!SLIDE bullets incremental

# Top 5 Resources

* Template
* Directory
* RemoteFile
* Deploy
* SCM

<div class="note">
Find more at http://wiki.opscode.com/display/chef/Resources
</div>

!SLIDE

# A Sample Template #

    @@@erb
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

!SLIDE

# A Sample Role #

    @@@ruby
    # roles/webserver.rb

    name        "webserver"
    description "The base role for systems" + 
                " that serve HTTP traffic"
    run_list    "recipe[apache2]",
                "recipe[apache2::mod_ssl]",
                "role[monitor]"
    default_attributes "apache2" => 
      { "listen_ports" => [ "80", "443" ] }

<div class="note">
Shamelessly copied straight from the chef wiki.
</div>
