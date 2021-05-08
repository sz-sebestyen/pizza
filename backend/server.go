package main

import (
	"log"
	"net/http"
)

func main() {
	http.Handle("/", http.FileServer(http.Dir("./")))

	http.HandleFunc("/menu", menuHandler)

	log.Println("Listening on :3000...")
	err := http.ListenAndServe(":3000", nil)
	if err != nil {
		log.Fatal(err)
	}
}

func menuHandler(w http.ResponseWriter, r *http.Request) {
	http.Redirect(w, r, "/menu.json", http.StatusSeeOther)
}
