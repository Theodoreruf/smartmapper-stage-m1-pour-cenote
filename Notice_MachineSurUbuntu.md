ETAPES IMPLEMENTATION RTAB MAP SUR UNE MACHINE 




I) Mettre en place un système booté sur ubuntu 20.04 (focal fossa)
 --> si vous ne savez pas comment dual boot un ubuntu, je vous invite à suivre ce tuto. C'est limpide et plutôt rapide ! 
 	https://lecrabeinfo.net/installer-ubuntu-20-04-lts-dual-boot-windows-10.html
 	






 II) Installation des librairies IntelRealsense 2.0 SDK. 
 1. sudo apt update && sudo apt upgrade
 2. git clone https://github.com/IntelRealSense/librealsense.git
 3. sudo apt-get install git libssl-dev libusb-1.0-0-dev libudev-dev pkg-config libgtk-3-dev
 
 (aller dans le répertoire librealense : cd ~/librealense)
 4. ./scripts/setup_udev_rules.sh
 5. mkdir build
 6. cd build
 7. cmake ..
 8. sudo make uninstall 
 9. sudo make clean 
 10. sudo make -j6 (ou moins que 6 si cpu ne suit pas) 
 11. sudo make install
  
 
 
 
 
  III) Installation de ROS (pour écrire cette liste de commande, j'ai utilisé le tutoriel de base : 		http://wiki.ros.org/noetic/Installation/Ubuntu
 
 
 1. sudo sh -c 'echo "deb http://packages.ros.org/ros/ubuntu $(lsb_release -sc) main" > /etc/apt/sources.list.d/ros-latest.list'
 
 2. sudo apt install curl
 3. curl -s https://raw.githubusercontent.com/ros/rosdistro/master/ros.asc | sudo apt-key add -
 4. sudo apt update (sudo apt upgrade si y a des trucs à maj)
 5. sudo apt install ros-noetic-desktop-full
 6. echo "source /opt/ros/noetic/setup.bash" >> ~/.bashrc
source ~/.bashrc
7. sudo apt install python3-rosdep python3-rosinstall python3-rosinstall-generator python3-wstool build-essential
8. sudo rosdep init
9. rosdep update 
 
 
 
 
 
 
 IV) Créer un répertoire de travail catkin (indispensable sur ros)
  --> suivre ce tutoriel : http://wiki.ros.org/catkin/Tutorials/create_a_workspace (ne pas faire l'encadré en bleu)
  
  
  
  
 V) Commencer l'implémentation de rtabmap (Je me suis servi de ce tuto pour écrire cette liste de commande : https://github.com/introlab/rtabmap_ros#installation) 
 
 1. sudo apt install ros-noetic-rtabmap-ros 
 2. source /opt/ros/noetic/setup.bash
 3. source ~/catkin_ws/devel/setup.bash
 4. sudo apt install ros-noetic-rtabmap ros-noetic-rtabmap-ros
 5. sudo apt remove ros-noetic-rtabmap ros-noetic-rtabmap-ros
 
 (pour installer gtsam à partir de ubuntu PPA) : 
 6. sudo add-apt-repository ppa:borglab/gtsam-develop && sudo apt update && sudo apt upgrade && sudo apt install libgtsam-dev libgtsam-unstable-dev
 
 (installations des librairies rtabmap) 
 7. cd ~ (revenir au répertoire principal)
 8. git clone https://github.com/introlab/rtabmap.git rtabmap
 9. cd rtabmap/build
 10. cmake ..
 11. make -j6 (si votre machine n'est pas assez puissante, mettre -j4 ou moins)
 
 (installer les libraries ros pour le répertoire catkin)
 12. cd ~/catkin_ws
 13. git clone https://github.com/introlab/rtabmap_ros.git src/rtabmap_ros
 14. catkin_make -j4 (ou moins que 4). 
 
 
 plus qu'à taper "reboot" dans le terminal. 
 
 au démarrage lancer rtabmap en tapant simplement "rtabmap". 
 
 
 
 
 
