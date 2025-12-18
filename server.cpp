#include "crow/crow.h"
#include <fstream>

int main() {
    crow::SimpleApp app;

    CROW_ROUTE(app, "/save").methods(crow::HTTPMethod::POST)
    ([](const crow::request& req) {
        // Parse JSON safely
        auto data = crow::json::load(req.body);
        if (!data) {
            return crow::response(400, "Invalid JSON data");
        }

        std::ofstream file("data.txt", std::ios::app);
        if (!file.is_open()) {
            return crow::response(500, "Failed to open file");
        }

        file << "Name: " << data["name"].s() << "\n";
        file << "Course: " << data["course"].s() << "\n";
        file << "Year: " << data["year"].i() << "\n";
        file << "DOB: " << data["dob"].s() << "\n";
        file << "Subjects: " << data["subjects"].i() << "\n";
        file << "------------------\n";
        file.close();

        return crow::response(200, "Saved successfully ✅");
    });

    app.port(18080).multithreaded().run();
}
