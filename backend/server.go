package main

import (
	"log"
	"net/http"
	"os"
)

func main() {

	http.Handle("/", http.FileServer(http.Dir("./")))

	http.HandleFunc("/menu", menuHandler)

	waitForAction(getPort())
}

func waitForAction(port string) {
	log.Println("Listening on :" + port + "...")
	err := http.ListenAndServe(":"+port, nil)
	if err != nil {
		log.Fatal(err)
	}
}

func getPort() string {
	port, portIsSet := os.LookupEnv("PORT")

	if !portIsSet {
		port = "3000"
	}

	return port
}

func menuHandler(w http.ResponseWriter, r *http.Request) {
	http.Redirect(w, r, "/menu.json", http.StatusSeeOther)
}
