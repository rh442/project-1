

// use a script tag or an external JS file
document.addEventListener("DOMContentLoaded", (event) => {
    gsap.registerPlugin(Draggable);
    gsap.registerPlugin(MotionPathPlugin);
    const BGM = document.getElementById('Music')
    const Boing = document.getElementById('Boing')
    const Laugh = document.getElementById('Laugh')
    //Scene1
    function Scene1() {
        let cloud = document.getElementById('cloud');
        let rain = document.getElementById('rain');
        let sceneElement = document.getElementById('Scene-1');
        let cloudDrag;
        let triggered = false;
        // gsap code here!
        gsap.set('#Main', {
            display: 'none',
            opacity: 0
        })
        gsap.set('#Scene-1', {
            display: 'block'
        })
        gsap.to('#Scene-1', {
            opacity: 1,
            duration: 2
        })
        gsap.set('#lyric-1', {
            display: 'block'
        })
        gsap.to('#lyric-1', {
            opacity: 1,
            duration: 2
        })
        gsap.to('#lyric-1', {
            opacity: 0,
            duration: 2,
            delay: 4
        })
        gsap.set('#lyric-1', {
            display: 'none',
            delay: 8
        })
        gsap.delayedCall(2, () => {
            gsap.to('#spider', {
                y: () => -sceneElement.offsetHeight * 0.7,
                duration: 8
            });
        })


        gsap.set('#cloud', {
            filter: 'none'
        })

        gsap.to('#cloud', {
            filter: "drop-shadow(0 0 10px rgba(0, 255, 0, 0.9))",
            duration: 0.5,
            repeat: -1,
            delay: 8,
            yoyo: true
        })

        gsap.delayedCall(5, () => {
            cloud.style.cursor = 'pointer';
            cloud.addEventListener("click", function () {
                gsap.set('#lyric-2', {
                    display: 'block'
                })
                gsap.to('#lyric-2', {
                    opacity: 1,
                    duration: 2
                })
                gsap.to('#lyric-2', {
                    opacity: 0,
                    duration: 2,
                    delay: 4
                })
                gsap.set('#lyric-2', {
                    display: 'none',
                    delay: 8
                })
                gsap.killTweensOf("#cloud");
                gsap.set("#cloud", {
                    filter: "none"
                });
                rain.style.display = 'block';
                gsap.delayedCall(.5, () => {
                    gsap.to('#spider', { y: 0, duration: 4 })
                })
                gsap.delayedCall(4, () => {
                    cloudDrag = Draggable.create('#cloud')[0];
                    cloudDrag.vars.onDragEnd = function () {
                        gsap.set('#lyric-3', {
                            display: 'block'
                        })
                        gsap.to('#lyric-3', {
                            opacity: 1,
                            duration: 2
                        })
                        gsap.to('#lyric-3', {
                            opacity: 0,
                            duration: 2,
                            delay: 4
                        })
                        gsap.set('#lyric-3', {
                            display: 'none',
                            delay: 8
                        })
                        gsap.killTweensOf("#cloud");
                        gsap.set("#cloud", {
                            filter: "none"
                        });
                        gsap.killTweensOf('#arrow-left');
                        gsap.set("#arrow-left", {
                            opacity: 0
                        });
                        gsap.to('#cloud', {
                            opacity: 0,
                            duration: 4,
                        })
                        gsap.to('#rain', {
                            opacity: 0,
                            duration: 4
                        })
                        gsap.delayedCall(6, () => {
                            gsap.set('#lyric-4', {
                                display: 'block'
                            })
                            gsap.to('#lyric-4', {
                                opacity: 1,
                                duration: 2
                            })
                            gsap.to('#lyric-4', {
                                opacity: 0,
                                duration: 2,
                                delay: 4
                            })
                            gsap.set('#lyric-4', {
                                display: 'none',
                                delay: 8
                            })
                            gsap.to('#spider', {
                                y: () => -sceneElement.offsetHeight * 1,
                                duration: 8,

                                onUpdate: function () {
                                    let y = gsap.getProperty('#spider', 'y');

                                    let triggerPoint = -sceneElement.offsetHeight * 0.8;

                                    if (y <= triggerPoint && !triggered) {
                                        triggered = true;

                                        gsap.to('#Scene-1', {
                                            opacity: 0,
                                            duration: 1,
                                        });
                                        gsap.delayedCall(1, () => {
                                            gsap.set('#Scene-1', {
                                                display: 'none',
                                            }

                                            )
                                            Scene2();
                                        }
                                        )

                                    }
                                }

                            })
                        })
                    }
                    gsap.to('#cloud', {
                        filter: "drop-shadow(0 0 10px rgba(0, 255, 0, 0.9))",
                        duration: 0.5,
                        repeat: -1,
                        yoyo: true
                    })
                    gsap.to('#arrow-left', {
                        opacity: 1,
                        duration: 0.75,
                        repeat: -1,
                        yoyo: true
                    })
                })
            })

        })
    }
    document.getElementById('play').addEventListener('click', Scene1);



    function Scene2() {
        let snow = document.getElementById('snow');
        let cloud = document.getElementById('cloud-2');
        let sceneElement = document.getElementById('Scene-2');
        let ice = document.getElementById('ice')
        let tree = document.getElementById('tree')
        let cloudDrag;
        console.log("Scene 2 called");
        gsap.set('#Scene-2', {
            display: 'block',
        })
        gsap.to('#Scene-2', {
            opacity: 1,
            duration: 2
        })

        let tl2 = gsap.timeline()


        tl2.from('#spider-2', {
            y: () => sceneElement.offsetHeight * 0.3,
            duration: 5,
            onStart: () => {
                console.log("Spider animation STARTED");
            },

            onComplete: () => {
                console.log("Spider animation FINISHED");
            }
        })
        tl2.to('#tree', {
            filter: "drop-shadow(0 0 10px rgba(0, 255, 0, 0.9))",
            duration: 0.5,
            repeat: -1,
            yoyo: true,
            cursor: 'pointer',
        })

        tl2.call(() => {
            tl2.pause()
            tree.addEventListener('click', function () {
                Boing.play()
                gsap.set('#lyric-5', {
                    display: 'block'
                })
                gsap.to('#lyric-5', {
                    opacity: 1,
                    duration: 2
                })
                gsap.to('#lyric-5', {
                    opacity: 0,
                    duration: 2,
                    delay: 4
                })
                gsap.set('#lyric-5', {
                    display: 'none',
                    delay: 8
                })
                gsap.killTweensOf('#tree');
                gsap.set('#tree', {
                    filter: 'none'
                })
                gsap.to("#spider-2", {
                    duration: 5,
                    motionPath: {
                        path: [
                            { x: 0, y: 0 },
                            { x: -sceneElement.offsetWidth * 0.2, y: -sceneElement.offsetHeight * 0.3 },
                            { x: -sceneElement.offsetWidth * 0.5, y: 0 }
                        ],
                        curviness: 1.5,
                    }


                });
                tl2.play()
            })
        })
        tl2.to('#spider-2', {
            y: () => -sceneElement.offsetHeight * .15,
            duration: 3,
            delay: 5.5,
        })
        tl2.to('#cloud-2', {
            filter: "drop-shadow(0 0 10px rgba(0, 255, 0, 0.9))",
            duration: 0.5,
            repeat: -1,
            yoyo: true,
            cursor: 'pointer',
        })
        tl2.call(() => {
            tl2.pause()
            cloud.addEventListener("click", function () {
                gsap.set('#lyric-6', {
                    display: 'block'
                })
                gsap.to('#lyric-6', {
                    opacity: 1,
                    duration: 2
                })
                gsap.to('#lyric-6', {
                    opacity: 0,
                    duration: 2,
                    delay: 4
                })
                gsap.set('#lyric-6', {
                    display: 'none',
                    delay: 8
                })
                gsap.killTweensOf("#cloud-2");
                gsap.set("#cloud-2", {
                    filter: "none"
                });
                snow.style.display = 'block';
                gsap.delayedCall(1, () => {
                    ice.style.display = 'block'
                })
                gsap.delayedCall(3, () => {
                    cloudDrag = Draggable.create('#cloud-2')[0];
                    cloudDrag.vars.onDragEnd = function () {
                        gsap.set('#lyric-7', {
                            display: 'block'
                        })
                        gsap.to('#lyric-7', {
                            opacity: 1,
                            duration: 2
                        })
                        gsap.to('#lyric-7', {
                            opacity: 0,
                            duration: 2,
                            delay: 4
                        })
                        gsap.set('#lyric-7', {
                            display: 'none',
                            delay: 8
                        })
                        gsap.killTweensOf("#cloud-2");
                        gsap.set("#cloud-2", {
                            filter: "none"
                        });
                        gsap.killTweensOf('#arrow-left-2');
                        gsap.set("#arrow-left-2", {
                            opacity: 0
                        });
                        gsap.to('#cloud-2', {
                            opacity: 0,
                            duration: 1,
                        })
                        gsap.to('#snow', {
                            opacity: 0,
                            duration: 3
                        })
                        gsap.to('#ice', {
                            opacity: 0,
                            duration: 5
                        })
                        tl2.play()
                    }
                    gsap.to('#cloud-2', {
                        filter: "drop-shadow(0 0 10px rgba(0, 255, 0, 0.9))",
                        duration: 0.5,
                        repeat: -1,
                        yoyo: true
                    })
                    gsap.to('#arrow-left-2', {
                        opacity: 1,
                        duration: 0.75,
                        repeat: -1,
                        yoyo: true
                    })

                })
            })
        })
        tl2.to('#window', {
            filter: "drop-shadow(0 0 10px rgba(0, 255, 0, 0.9))",
            duration: 0.5,
            repeat: -1,
            yoyo: true,
            cursor: 'pointer',
            delay: 5
        })
        tl2.call(() => {
            tl2.pause()
            window.addEventListener('click', () => {
                Boing.play()
                gsap.set('#lyric-8', {
                    display: 'block'
                })
                gsap.to('#lyric-8', {
                    opacity: 1,
                    duration: 2
                })
                gsap.to('#lyric-8', {
                    opacity: 0,
                    duration: 2,
                    delay: 4
                })
                gsap.set('#lyric-8', {
                    display: 'none',
                    delay: 8
                })
                gsap.killTweensOf('#window');
                gsap.set('#window', {
                    filter: 'none'
                })
                let x = gsap.getProperty('#spider-2', 'x');
                let y = gsap.getProperty('#spider-2', 'y');
                gsap.to("#spider-2", {
                    duration: 5,

                    motionPath: {
                        path: [
                            { x: x, y: y },
                            { x: -sceneElement.offsetWidth * 0.6, y: -sceneElement.offsetHeight * 0.4 },
                            { x: -sceneElement.offsetWidth * 0.7, y: -sceneElement.offsetHeight * 0.3 }
                        ],
                        curviness: 1.5,
                    }


                });
                tl2.play()
            })
        })
        tl2.call(() => {
            gsap.delayedCall(2, () => {
                gsap.to('#Scene-2', {
                    opacity: 0,
                    duration: 1,
                });
                gsap.delayedCall(1, () => {
                    gsap.set('#Scene-2', {
                        display: 'none',
                    }

                    )
                    Scene3();
                })
            })

        })



    }

    //Scene-3
    function Scene3() {
        let sceneElement = document.getElementById('Scene-3');
        console.log('Scene 3 called');
        gsap.set('#Scene-3', {
            display: 'block',
        })
        gsap.to('#Scene-3', {
            opacity: 1,
            duration: 2
        })
        gsap.set('#lyric-9', {
            display: 'block'
        })
        gsap.to('#lyric-9', {
            opacity: 1,
            duration: 2
        })
        gsap.to('#lyric-9', {
            opacity: 0,
            duration: 2,
            delay: 4
        })
        gsap.set('#lyric-9', {
            display: 'none',
            delay: 8
        })
        let tl3 = gsap.timeline()
        console.log('left')

        let x = gsap.getProperty('#spider-3', 'x');
        let y = gsap.getProperty('#spider-3', 'y');

        tl3.to('#spider-3', {
            duration: 5,

            motionPath: {
                path: [
                    { x: x, y: y },
                    { x: -sceneElement.offsetWidth * 0.4, y: sceneElement.offsetHeight * 0.2 },
                    { x: -sceneElement.offsetWidth * 0.45, y: sceneElement.offsetHeight * 0.5 }
                ],
                curviness: 1.5,
            }
        })

        tl3.set('#duck', {
            'z-index': 2
        })

        tl3.to('#duck', {
            scale: '3',
            y: -sceneElement.offsetHeight * .2,
            duration: 4,
            delay: 2,
            onComplete: () => {
                console.log('Laugh')
                Laugh.play();
            }
        }, '>')
        gsap.set('#lyric-10', {
            display: 'block',
            delay: 6
        })
        gsap.to('#lyric-10', {
            opacity: 1,
            duration: 2,
            delay: 6
        })

        gsap.to('#lyric-10', {
            opacity: 0,
            duration: 2,
            delay: 10
        })
        gsap.set('#lyric-10', {
            display: 'none',
            delay: 12
        })

        gsap.set('#lyric-11', {
            display: 'block',
            delay: 12
        })
        gsap.to('#lyric-11', {
            opacity: 1,
            duration: 2,
            delay: 12
        })
        gsap.to('#lyric-11', {
            opacity: 0,
            duration: 2,
            delay: 16
        })
        gsap.set('#lyric-11', {
            display: 'none',
            delay: 20
        })
        tl3.set('#water', {
            display: 'block'
        })
        tl3.to('#water', {
            y: () => sceneElement.offsetHeight * 1.2,
            delay: 2,
            duration: 2
        })
        tl3.call(() => {
            gsap.delayedCall(3, () => {
                gsap.to('#Scene-3', {
                    opacity: 0,
                    duration: 1,
                });
                gsap.delayedCall(1, () => {
                    gsap.set('#Scene-3', {
                        display: 'none',
                    }

                    )
                    Scene4();
                })
            })

        })

    }

    function Scene4() {
        let sceneElement = document.getElementById('Scene-4');
        let triggered;
        console.log('Scene 4 called');
        gsap.set('#Scene-4', {
            display: 'block',
        })



        gsap.set('#spider-5', {
            display: 'none'
        })
        gsap.set('#spider-6', {
            display: 'none'
        })
        gsap.set('#start', {
            display: 'block'
        })
        gsap.to('#Scene-4', {
            opacity: 1,
            duration: 2
        })
        let tl4 = gsap.timeline();
        tl4.to('#start', {
            opacity: 1,
            duration: 2
        });


        tl4.to('#spider-4', {
            y: () => -sceneElement.offsetHeight * .8,
            duration: 8
        });
        tl4.set('#lyric-12', {
            display: 'block',
            opacity: 0
        }, '<');

        tl4.to('#lyric-12', {
            opacity: 1,
            duration: 1
        }, '<');

        tl4.to('#lyric-12', {
            opacity: 0,
            duration: 1,
            delay: 3
        }, '<');

        tl4.set('#lyric-12', {
            display: 'none'
        });

        // Fade START out near the end
        tl4.to('#start', {
            opacity: 0,
            duration: 1
        }, '-=2');

        tl4.set('#start', {
            display: 'none'
        });

        tl4.set('#spider-4', {
            display: 'none'
        });
        //MIDDLE
        tl4.set('#middle', {
            display: 'block'
        })
        tl4.to('#middle', {
            opacity: 1,
            duration: 2
        })

        tl4.set('#spider-5', {
            display: 'block',
        })
        tl4.from('#spider-5', {
            y: () => sceneElement.offsetHeight * .2,
            duration: 2
        })
        tl4.to('#spider-5', {
            y: () => -sceneElement.offsetHeight * .8,
            duration: 8
        })
        tl4.set('#lyric-13', {
            display: 'block',
            opacity: 0
        }, '<');

        tl4.to('#lyric-13', {
            opacity: 1,
            duration: 2
        }, '<');

        tl4.to('#lyric-13', {
            opacity: 0,
            duration: 2,
            delay: 3
        }, '<');

        tl4.set('#lyric-13', {
            display: 'none'
        });
        tl4.to('#middle', {
            opacity: 0,
            duration: 1
        }, '-=2');

        tl4.set('#middle', {
            display: 'none'
        });

        tl4.set('#spider-5', {
            display: 'none'
        });
        //END
        tl4.set('#end', {
            display: 'block'
        })
        tl4.set('#sun-2', {
            display: 'block'
        })
        tl4.to('#sun-2', {
            rotate: 360,
            duration: 4,
            ease: 'none',
            repeat: -1
        })
        tl4.to('#end', {
            opacity: 1,
            duration: 2
        }, "<")

        tl4.set('#spider-6', {
            display: 'block',
        })
        tl4.from('#spider-6', {
            y: () => sceneElement.offsetHeight * .2,
            duration: 2
        })
        tl4.to('#spider-6', {
            y: () => -sceneElement.offsetHeight * .45,
            duration: 4.5
        })

        tl4.call(() => {
            tl4.pause()
            let img = document.createElement('img');
            let Scene4 = document.getElementById('Scene-4')
            img.src = 'images/web.webp';
            img.id = 'web';
            Scene4.appendChild(img);
            let x = gsap.getProperty('#spider-6', 'x');
            let y = gsap.getProperty('#spider-6', 'y');
            gsap.to(img, {
                scale: 1,
                duration: 3
            })

            tl4.play()
        })
        tl4.set('#lyric-14', {
            display: 'block',
            opacity: 0
        }, '<');

        tl4.to('#lyric-14', {
            opacity: 1,
            duration: 2
        }, '<');

        tl4.to('#lyric-14', {
            opacity: 0,
            duration: 2,
            delay: 3
        }, '<');

        tl4.set('#lyric-14', {
            display: 'none'
        });
        tl4.to('#spider-6', {
            rotate: 360,
            duration: 1.5,
            repeat: 3,
            ease: 'none',
            delay: 3
        }, '<')
        tl4.set('#lyric-15', {
            display: 'block',
            opacity: 0
        }, '<');

        tl4.to('#lyric-15', {
            opacity: 1,
            duration: 2
        }, '<');

        tl4.to('#lyric-15', {
            opacity: 0,
            duration: 2,
            delay: 3
        }, '<');

        tl4.set('#lyric-15', {
            display: 'none'
        });

        tl4.set('#lyric-16', {
            display: 'block',
            opacity: 0
        }, '<');

        tl4.to('#lyric-16', {
            opacity: 1,
            duration: 2
        }, '<');

        tl4.to('#lyric-16', {
            opacity: 0,
            duration: 2,
            delay: 3
        }, '<');

        tl4.set('#lyric-16', {
            display: 'none'
        });
        tl4.call(() => {
            gsap.delayedCall(2, () => {
                gsap.to('#Scene-4', {
                    opacity: 0,
                    duration: 1,
                });
                gsap.delayedCall(1, () => {
                    gsap.set('#Scene-4', {
                        display: 'none',
                    }

                    )
                    Main();
                    BGM.stop()
                })
            })

        })

    }
    function Main() {
        gsap.set('#Main', {
            display: 'block',
            opacity: 1,
        })
    }
    function Music() {
        BGM.play()
    }
    document.getElementById('play').addEventListener('click', Music);
});




