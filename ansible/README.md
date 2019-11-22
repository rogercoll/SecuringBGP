First of all modify inventory file with the AWS private key path, then:


To install roles:
ansible-galaxy install -p roles/ -r requirements.yml

ansible-playbook -i inventory site.yml
