import * as React from "react";
import * as THREE from 'three';
import { STLLoader } from "../STLLoader";
import { OrbitControls } from "../OrbitControls";


interface ICADViewerProps{
    stlFile: string;
}

interface ICADViewerState{
    renderer: THREE.WebGLRenderer | null;
    scene: THREE.Scene | null;
    camera: THREE.PerspectiveCamera | null;
    mesh: THREE.Mesh | null;
    controls: OrbitControls | null;
}

class CADViewer extends React.Component<ICADViewerProps, ICADViewerState>{

    private containerRef = React.createRef<HTMLDivElement>();

    constructor(props: ICADViewerProps) {
        super(props);
        this.state = {
          renderer: null,
          scene: null,
          camera: null,
          mesh: null,
          controls: null
        };
    }

    componentDidMount() {
        const { stlFile } = this.props;
        const width = window.innerWidth;
        const height = window.innerHeight;
    
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera( 35, width / height, 1, 15);
        camera.position.z = 5;
    
        const renderer = new THREE.WebGLRenderer( { antialias: true } );
        renderer.setPixelRatio( window.devicePixelRatio );
        renderer.setSize( width, height);
        renderer.setClearColor(0xffffff, 1);
        renderer.outputEncoding = THREE.sRGBEncoding;
    
        const loader = new STLLoader();
        loader.load("./demo.stl", (geometry: THREE.BufferGeometry) => {
            const material = new THREE.MeshPhongMaterial({color: 0x049ef4, specular: 0x111111, shininess: 30});
            const mesh = new THREE.Mesh(geometry, material);

            mesh.position.set( 0, - 0.25, 0.6 );
            mesh.rotation.set( 0, - Math.PI / 2, 0 );
            mesh.scale.set(0.005, 0.005, 0.005);

            scene.add(mesh);
            this.setState({ mesh });
        });

        scene.add( new THREE.HemisphereLight( 0x443333, 0x111122 ) );

        let controls = new OrbitControls( camera, renderer.domElement );
        this.setState({ renderer, scene, camera, controls});

        /*ToDo: 
        Learn React, you should not be managing the document
        For some reason we're running componentDidMount twice, are
        we supposed to clean up somewhere with componentDidUnmount?
        why is componentDidMount running twice? 
        I'm also not convinced that the problem is solved here
        */
        let rootDiv = this.containerRef.current;
        if (rootDiv) {
            if(rootDiv.firstChild){
                rootDiv.removeChild(rootDiv.firstChild);
            }
            rootDiv.appendChild(renderer.domElement);
        }else{
            console.log("We lost the root");
        }

        this.animate();
    }

    animate = () => {
        const { renderer, scene, camera, mesh, controls} = this.state;
        if (renderer && scene && camera && mesh && controls) {
          controls.update();
          renderer.render( scene, camera );
        }
        requestAnimationFrame( this.animate );
      };

    render() {
        return <div ref={this.containerRef}/>;
    } 
}

export default CADViewer;