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