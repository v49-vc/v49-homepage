FROM gitpod/workspace-full:latest

# Use Node 18 and enable Node's package-manager manager
RUN bash -c 'VERSION="18" \
  && source $HOME/.nvm/nvm.sh && nvm install $VERSION \
  && nvm use $VERSION && nvm alias default $VERSION \
  && corepack enable'

RUN echo "nvm use default &>/dev/null" >> ~/.bashrc.d/51-nvm-fix
