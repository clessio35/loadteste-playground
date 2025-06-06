pipeline {
  agent any

  environment {
    GITHUB_REPO = 'https://github.com/clessio35/loadteste-playground.git'
    GITLAB_REPO = 'https://gitlab.com/clessio35/loadteste-playground.git'
  }

  stages {
    stage('Clone GitHub Repo') {
      steps {
        sh '''
          rm -rf github-repo
          git clone $GITHUB_REPO github-repo
        '''
      }
    }

    stage('Clone GitLab Repo') {
      steps {
        sh '''
          rm -rf gitlab-repo
          git clone $GITLAB_REPO gitlab-repo
        '''
      }
    }

    stage('Install k6') {
      steps {
        sh '''
          if ! command -v k6 > /dev/null; then
            echo "Instalando k6..."
            sudo apt update && sudo apt install -y k6
          fi
        '''
      }
    }

    stage('Run k6 from GitHub') {
      steps {
        dir('github-repo') {
          sh 'k6 run tests/load.js'
        }
      }
    }

    stage('Run k6 from GitLab') {
      steps {
        dir('gitlab-repo') {
          sh 'k6 run tests/load.js'
        }
      }
    }
  }

  post {
    always {
      echo 'Pipeline de ambos os repositórios finalizado.'
    }
  }
}
