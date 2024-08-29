provider "docker" {}

resource "docker_network" "my_app_network" {
  name = "my_app_network"
}

resource "docker_image" "webserver" {
  name = "nginx:latest"
}

resource "docker_container" "webserver" {
  image = docker_image.webserver.latest
  name  = "webserver"
  networks_advanced {
    name = docker_network.my_app_network.name
  }
}

# Optional: Datenbank Container
resource "docker_image" "db" {
  name = "mysql:5.7"
}

resource "docker_container" "db" {
  image = docker_image.db.latest
  name  = "db"
  env {
    MYSQL_ROOT_PASSWORD = "example"
  }
  networks_advanced {
    name = docker_network.my_app_network.name
  }
}