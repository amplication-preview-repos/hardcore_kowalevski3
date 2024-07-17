module "csql_em_bro" {
  source  = "googlecloudplatform/sql-db/google//modules/postgresql"
  version = "17.1.0"

  name                 = "sandbox-em-bro"
  database_version     = "POSTGRES_15"
  project_id           = "${module.service_project_teams["sandbox-development"].project_id}"
  zone                 = "europe-west2-a"
  region               = "europe-west2"
  tier                 = "db-custom-2-3840"

  db_name      = "em-bro"
  db_charset   = "UTF8"
  db_collation = "en_US.UTF8"

  disk_size = "10"
  disk_type = "PD_SSD"

  availability_type = "ZONAL"

  deletion_protection = "true"

  database_flags       = []
  additional_databases = []
  additional_users     = []
  iam_users            = []

  ip_configuration = {
    ipv4_enabled    = false
  }
}

output "name" {
  value = module.csql_em_bro.instance_name
}

output "user_name" {
  value = module.csql_em_bro.user_name
}

output "generated_user_password" {
  sensitive = true
  value     = module.csql_em_bro.generated_user_password
}

output "replicas" {
  sensitive = true
  value     = module.csql_em_bro.replicas
}

output "instances" {
  sensitive = true
  value     = module.csql_em_bro.instances
}