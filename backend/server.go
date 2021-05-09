package main

import (
	"encoding/json"
	"fmt"
	"log"
	"net/http"
	"os"
)

func main() {

	http.Handle("/", http.FileServer(http.Dir("./")))

	http.HandleFunc("/menu", menuHandler)
	http.HandleFunc("/book", bookHandler)

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

type BookedTable struct {
	Name  string `json:"name"`
	Email string `json:"email"`
	Date  string `json:"date"`
	Time  string `json:"time"`
	Seats int    `json:"seats"`
}

func bookHandler(w http.ResponseWriter, r *http.Request) {
	if r.Method == "POST" {

		var table BookedTable

		err := json.NewDecoder(r.Body).Decode(&table)
		if err != nil {
			http.Error(w, err.Error(), http.StatusBadRequest)
			return
		}

		fmt.Printf("%+v\n", table)

		w.Write([]byte("success"))
	} else {
		log.Println("error")
		w.WriteHeader(404)
		w.Write([]byte("error"))
	}
}
