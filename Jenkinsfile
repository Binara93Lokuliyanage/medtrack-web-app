pipeline {
    agent any

    environment {
        NODEJS_HOME = tool name: 'NodeJS', type: 'NodeJS installations'
        PATH = "${NODEJS_HOME}/bin:${env.PATH}"
        SONARQUBE = 'SonarQube'
        DOCKER_IMAGE = 'medtrack-web'
    }

    stages {
        stage('Checkout') {
            steps {
                git url: 'https://github.com/Binara93Lokuliyanage/medtrack-web-app.git', branch: 'main'
            }
        }

        stage('Verify NodeJS') {
            steps {
                sh 'node -v'
                sh 'npm -v'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Build') {
            steps {
                sh 'npm run build'
                sh 'docker build -t $DOCKER_IMAGE .'
            }
        }

        stage('Test') {
            steps {
                sh 'npm test'
            }
        }

        stage('Code Quality') {
            steps {
                withSonarQubeEnv('SonarQube') {
                    sh 'sonar-scanner -Dsonar.projectKey=medtrack -Dsonar.sources=src'
                }
            }
        }

        stage('Security Scan') {
            steps {
                sh 'dependency-check --project MedTrack --scan . --format HTML --out dependency-check-report.html'
                publishHTML(target: [
                    reportDir: '.',
                    reportFiles: 'dependency-check-report.html',
                    reportName: 'Dependency Check Report'
                ])
            }
        }

        stage('Deploy to Test') {
            steps {
                sh 'docker-compose -f docker-compose.test.yml up -d --build'
            }
        }

        stage('Release to Production') {
            when {
                branch 'main'
            }
            steps {
                sh 'docker-compose -f docker-compose.prod.yml up -d --build'
            }
        }

        stage('Monitoring') {
            steps {
                echo 'Monitoring setup with Prometheus and Grafana.'
            }
        }
    }

    post {
        always {
            echo 'Pipeline execution completed.'
        }
    }
}
