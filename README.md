# Metal Cooling Simulator (MCS)
Web-based Metal Cooling Simulator made form scratch using WebGPU.
# Chimera & Equinox
Both apps use the same command set:

```
npm run build
```
to bundle your application.

To run just use 
```
npm run start
```
after installing the required dependencies

# Changelog:
# V0.0.2
  The engine is now able to render approx. 2 million cells fairly fast, on a mediocre laptop (i3 - 3.4ghz, 12G RAM, INTEGRATED IntelHD? GPU). I am positive that these numbers go up on a more capable machine.
![Screenshot from 2024-05-04 14-58-23](https://github.com/Ap-Cristian/eutectics/assets/91757763/f2e8a6e2-aca5-429e-8071-69688ea805eb)
* All matrix operations are performed on GPU to ensure a fast app initialization, might migrate initial rotation and translation matrixes on the CPU, to take some load off of the GPU.
TO_DOs:
* Add frame counter
* Add menu for cell opacity controll
* Add cube voxelisation for imported objects
* Implement cell logic

# V0.0.1
![image](https://github.com/Ap-Cristian/eutectics/assets/91757763/b87a7b97-c0fb-4cd1-8eb8-305b3d9b688a)
* Instancing


