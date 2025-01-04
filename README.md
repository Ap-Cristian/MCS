# Metal Cooling Simulator (MCS)
Web-based Metal Cooling Simulator made form scratch using WebGPU.
# Chimera & Equinox
Both apps use the same command set:

Firstly, install the required dependencies using
```
npm i
```
then you can build the app using.
```
npm run build
```
To run just use 
```
npm run start
```


# Changelog:
V0.0.2<br>
* The engine is now able to render approx. 2 million cells fairly fast, on a mediocre laptop (i3 - 3.4ghz, 12GB RAM, INTEGRATED IntelHD? GPU). I am positive that these numbers go up on a more capable machine.<br>
* All matrix operations are performed on GPU to ensure a fast app initialization, might migrate initial rotation and translation matrixes on the CPU, to take some load off of the GPU.
![Screenshot from 2024-05-04 14-58-23](https://github.com/Ap-Cristian/eutectics/assets/91757763/f2e8a6e2-aca5-429e-8071-69688ea805eb)
<br><br>
V0.0.1<br>

![image](https://github.com/Ap-Cristian/eutectics/assets/91757763/b87a7b97-c0fb-4cd1-8eb8-305b3d9b688a)
* Instancing
  
V0.1.2<br>
* Objects are now instanced
* Engine is now capable of rendering blender exports (obj files)
* Add frame counter
* Bounding boxes are now drawn for each drawable
* Refactor entire rendering system, code and source tree are much cleaner<br><br>
![Screenshot from 2024-09-15 00-01-10](https://github.com/user-attachments/assets/e824f29d-b2a7-401a-bbf5-45b972f50107)
![Screenshot from 2024-06-30 11-31-57](https://github.com/user-attachments/assets/0d1db6e8-7a6d-4886-abfe-07457281bef4)
