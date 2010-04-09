!SLIDE subsection

# Architecture #

!SLIDE bullets incremental

# Key Components

* Nodes
* Roles
* Cookbooks

!SLIDE bullets incremental directory

# The Chef Directory #

* config/
* cookbooks/
* roles/
* site-cookbooks/ (sometimes)

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

!SLIDE bullets incremental directory

# The Cookbook Directory #

* recipes/
* files/
* templates/
* attributes/

!SLIDE bullets incremental directory

# A Cookbook #

* metadata.rb
* definitions/
* libraries/

!SLIDE bullets incremental

# Top 4 Resources

* Template
* Directory
* RemoteFile
* Deploy

