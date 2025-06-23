import React from 'react';
import Icon from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Menu as AntMenu, ConfigProvider } from 'antd';
import { ImgClapping, ImgDancing, ImgJumping, ImgPunching, ImgRunning, ImgSitting, ImgWalking, ImgWeaving } from '../assets/images'

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
    type?: 'group',
): MenuItem {
    return {
        key,
        icon,
        children,
        label,
        type,
    } as MenuItem;
}

const items: MenuItem[] = [
    getItem('hip-hop-dancing', 'hip-hop-dancing', <Icon component={ImgDancing} />),
    getItem('jumping', 'jumping', <Icon component={ImgJumping} />),
    getItem('punching', 'punching', <Icon component={ImgPunching} />),
    getItem('running', 'running', <Icon component={ImgRunning} />),
    getItem('sitting-clap', 'sitting-clap', <Icon component={ImgClapping} />),
    getItem('sitting-pose', 'sitting-pose', <Icon component={ImgSitting} />),
    getItem('walking', 'walking', <Icon component={ImgWalking} />),
    getItem('weaving', 'weaving', <Icon component={ImgWeaving} />),
    getItem('cheering', 'cheering', <Icon component={ImgWeaving} />),
    getItem('crying', 'crying', <Icon component={ImgWeaving} />),
    getItem('bowing', 'bowing', <Icon component={ImgWeaving} />),
    getItem('noding', 'noding', <Icon component={ImgWeaving} />),
    getItem('head-spinning', 'head-spinning', <Icon component={ImgWeaving} />),
    getItem('welcome', 'welcome', <Icon component={ImgWeaving} />),
    getItem('clapping', 'clapping', <Icon component={ImgWeaving} />),
    getItem('climbing', 'climbing', <Icon component={ImgWeaving} />),
    getItem('run-away', 'run-away', <Icon component={ImgWeaving} />),
    getItem('praying', 'praying', <Icon component={ImgWeaving} />),
    getItem('fall-down', 'fall-down', <Icon component={ImgWeaving} />),
    getItem('looking-right', 'looking-right', <Icon component={ImgWeaving} />),
    getItem('laying', 'laying', <Icon component={ImgWeaving} />),
    getItem('lying-down', 'lying-down', <Icon component={ImgWeaving} />),
    getItem('salute', 'salute', <Icon component={ImgWeaving} />),
    getItem('melee-attack', 'melee-attack', <Icon component={ImgWeaving} />),
    getItem('heavy-hit', 'heavy-hit', <Icon component={ImgWeaving} />),
];

interface Props {
    setCurrentAnimation: (key: any) => void
}

const AnimateMenu = (props: Props) => {
    const { setCurrentAnimation } = props

    return (
        <div>
            <ConfigProvider
                theme={{
                    components: {
                        Menu: {
                            collapsedWidth: 40
                        }
                    }
                }}
            >
                <AntMenu
                    defaultSelectedKeys={['1']}
                    mode="inline"
                    theme="light"
                    inlineCollapsed={true}
                    items={items}
                    onClick={(e) => setCurrentAnimation(e.key)}
                />
            </ConfigProvider>
        </div>
    );
};

export default AnimateMenu;