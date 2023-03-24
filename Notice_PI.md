I) 
pour rtabmap (https://github.com/introlab/rtabmap/wiki/Installation#raspberrypi) : 
1) sudo apt-get install libpcl-dev libopencv-dev cmake libfreenect-dev libopenni2-dev libsqlite3-dev libvtk6-qt-dev

installer opencv (lien source : https://opencv.org/releases/)
--> prenez la derniere version et placez le fichier dezippé dans le repertoire ou y a documents etc

2) cd opencv
3) mkdir build
4) cd build
5) cmake -DCMAKE_BUILD_TYPE=Release ..
6) make 
7) sudo make install


II) 
pour librealsense2 (https://github.com/IntelRealSense/librealsense/blob/master/doc/installation_raspbian.md) : 

1) sudo apt install libdrm-amdgpu1 libdrm-dev libdrm-exynos1 libdrm-freedreno1 libdrm-nouveau2 libdrm-omap1 libdrm-radeon1 libdrm-tegra0 libdrm2 

2) sudo apt install libglu1-mesa libglu1-mesa-dev glusterfs-common libglu1-mesa libglu1-mesa-dev libglui-dev libglui2c2

3) sudo apt install libglu1-mesa libglu1-mesa-dev mesa-utils mesa-utils-extra xorg-dev libgtk-3-dev libusb-1.0-0-dev

4) cd ~
5) git clone https://github.com/IntelRealSense/librealsense.git
6) cd librealsense
7) sudo cp config/99-realsense-libusb.rules /etc/udev/rules.d/ 
8) sudo udevadm control --reload-rules && udevadm trigger 

9) cd ~/librealsense
10) mkdir  build  && cd build
11) cmake .. -DBUILD_EXAMPLES=true -DCMAKE_BUILD_TYPE=Release -DFORCE_LIBUVC=true
12) make -j1
13) sudo make install

14) sudo reboot (reboot le systeme)


III) installer rtabmap : 

8) git clone https://github.com/introlab/rtabmap.git rtabmap
9) cd rtabmap/build
10) cmake ..
11) sudo make 
12) sudo make install
13) sudo ldconfig


vous pouvez maintenant ouvrir rtabmap en écrivant (peu importe le répertoire dans lequel vous vous trouvez) dans la console : "rtabmap" 




