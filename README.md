# MedTrack Dockerised Application

This project is a dockerised version of the MedTrack group project, completed individually by Binara Lokuliyanage for HD-level submission in SIT725.

## Student Identity Endpoint

This application includes a custom API route `/api/student` that returns the my name and student ID.

### Example Output

```
{
  "name": "Binara Lokuliyanage",
  "studentId": "224005681"
}
```

## How to Run the Docker Container

Follow these steps to build and run the application using Docker.

### 1. Clone the Repository

```bash
git clone https://github.com/Binara93Lokuliyanage/medtrack-web-app.git
cd medtrack-web-app
```

### 2. Build the Docker Image

```bash
docker build -t medtrack-app .
```

### 3. Run the Docker Container

```bash
docker run -p 3000:3000 medtrack-app
```

### 4. Access the Application

Open your browser and go to:

```
http://localhost:3000/api/student
```

You should see a JSON response with my name and student ID.
