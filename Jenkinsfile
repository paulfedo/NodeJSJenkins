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
            when {
                anyOf {
                    branch 'main'
                    branch 'dev'
                }
            }
            steps {
                sh "docker rm -f ${CONTAINER_NAME} || true"
            }
        }

        stage('Build Docker Image') {
            when {
                anyOf {
                    branch 'main'
                    branch 'dev'
                }
            }
            steps {
                sh "docker build -t ${IMAGE_NAME} ."
            }
        }

        stage('Run Docker Container') {
            when {
                anyOf {
                    branch 'main'
                    branch 'dev'
                }
            }
            steps {
                sh "docker run -d --name ${CONTAINER_NAME} -p ${HOST_PORT}:${CONTAINER_PORT} ${IMAGE_NAME}"
            }
        }

        stage('Show Docker Images') {
            when {
                anyOf {
                    branch 'main'
                    branch 'dev'
                }
            }
            steps {
                sh 'docker images'
            }
        }

        stage('Show Running Containers') {
            when {
                anyOf {
                    branch 'main'
                    branch 'dev'
                }
            }
            steps {
                sh 'docker ps'
            }
        }
    }

    post {
        success {
            echo "✅ Branch '${env.BRANCH_NAME}' deployed container ${CONTAINER_NAME} on port ${HOST_PORT}"
        }
        failure {
            echo "❌ Something went wrong on branch '${env.BRANCH_NAME}'"
        }
    }
}

