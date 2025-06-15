pipeline {
    agent any

    environment {
        IMAGE_NAME = "api1"
        CONTAINER_NAME = "api1"
        HOST_PORT = "5000"
        CONTAINER_PORT = "3000"
    }

    stages {
        stage('Clean Old Container') {
            steps {
                script {
                    sh """
                        docker rm -f ${CONTAINER_NAME} || true
                    """
                }
            }
        }

        stage('Build Docker Image') {
            steps {
                sh """
                    docker build -t ${IMAGE_NAME} .
                """
            }
        }

        stage('Run Docker Container') {
            steps {
                sh """
                    docker run -d --name ${CONTAINER_NAME} -p ${HOST_PORT}:${CONTAINER_PORT} ${IMAGE_NAME}
                """
            }
        }

        stage('Show Docker Images') {
            steps {
                sh 'docker images'
            }
        }

        stage('Show Running Containers') {
            steps {
                sh 'docker ps'
            }
        }
    }

    post {
        failure {
            echo "💥 Build or container run failed!"
        }
        success {
            echo "✅ Docker container '${CONTAINER_NAME}' running on port ${HOST_PORT}"
        }
    }
}
