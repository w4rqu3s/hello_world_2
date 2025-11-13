// Import and register all your controllers from the importmap via controllers/**/*_controller
import { Application } from "controllers/application"
import { eagerLoadControllersFrom } from "@hotwired/stimulus-loading"
eagerLoadControllersFrom("controllers", Application)

