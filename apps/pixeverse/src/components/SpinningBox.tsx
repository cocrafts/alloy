import type { FC } from 'react';
import { useRef, useState } from 'react';
import { useBeforeRender, useClick, useHover } from 'react-babylonjs';
import { Color3, Vector3 } from '@babylonjs/core';

const DefaultScale = new Vector3(1, 1, 1);
const BiggerScale = new Vector3(1.25, 1.25, 1.25);

interface Props {
	name: string;
	position: Vector3;
	color?: Color3;
	hoveredColor?: Color3;
}

const SpinningBox: FC<Props> = ({
	name,
	position,
	color = Color3.FromHexString('#FFFF00'),
	hoveredColor = Color3.FromHexString('#00FF00'),
}) => {
	const boxRef = useRef<JSX.IntrinsicElements['box']>(null);

	const [clicked, setClicked] = useState(false);
	useClick(() => setClicked((clicked) => !clicked), boxRef as never);

	const [hovered, setHovered] = useState(false);
	useHover(
		() => setHovered(true),
		() => setHovered(false),
		boxRef as never,
	);

	const rpm = 5;
	useBeforeRender((scene) => {
		if (boxRef.current?.rotation) {
			const deltaTimeInMillis = scene.getEngine().getDeltaTime();
			boxRef.current.rotation.y +=
				(rpm / 60) * Math.PI * 2 * (deltaTimeInMillis / 1000);
		}
	});

	return (
		<box
			name={name}
			ref={boxRef as never}
			size={2}
			position={position}
			scaling={clicked ? BiggerScale : DefaultScale}
		>
			<standardMaterial
				name={`${name}-mat`}
				diffuseColor={hovered ? hoveredColor : color}
				specularColor={Color3.Black()}
			/>
		</box>
	);
};

export default SpinningBox;
