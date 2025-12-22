#include <iostream>
#include <fstream>
using namespace std;

int main(int argc, char* argv[]) {

    if (argc < 6) {
        cout << "Not enough data provided";
        return 1;
    }

    string name     = argv[1];
    string course   = argv[2];
    string year     = argv[3];
    string dob      = argv[4];
    string subjects = argv[5];

    ofstream file("../data/profile.txt", ios::app);

    file << "Name: " << name << endl;
    file << "Course: " << course << endl;
    file << "Year: " << year << endl;
    file << "DOB: " << dob << endl;
    file << "Subjects: " << subjects << endl;
    file << "------------------" << endl;

    file.close();

    cout << "Profile saved successfully";
    return 0;
}
