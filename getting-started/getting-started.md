!SLIDE subsection

# Getting Started #

!SLIDE commandline incremental

# On your local machine #

    $ git clone http://github.com/opscode/chef-repo
    $ gem install spatula
    $ spatula prepare db-server.yourcompany.com
    $ spatula install mysql

<div class="note">
spatula is in flux, so don't be surprised if commands have changed.
</div>

!SLIDE

# Make a node config #

    @@@ javascript
    // config/db_server.json
  
    { 
      "mysql": {
        "server_root_password": "abcdefg"
      },
      "recipes": ["mysql"]
    } 

!SLIDE commandline incremental

# Again Locally #

    $ spatula cook db-server.yourcompany.com db_server

<div class="note">
spatula is in flux, so don't be surprised if commands have changed.
</div>

!SLIDE center

# ALL DONE! #
