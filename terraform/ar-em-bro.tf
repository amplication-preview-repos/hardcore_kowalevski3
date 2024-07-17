resource "google_artifact_registry_repository" "ar_em_bro" {
  location      = "europe-west1"
  repository_id = "em-bro"
  project       = module.host_project_artifacts.project_id
  description   = "Container image repository for em-bro"
  format        = "DOCKER"

  docker_config {
    immutable_tags = true
  }
}
