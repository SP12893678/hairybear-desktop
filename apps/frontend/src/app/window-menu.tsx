import React from 'react';
import { MinusOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Menu as AntMenu, ConfigProvider } from 'antd';

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
    getItem('close', 'close', <MinusOutlined />),
];

interface Props {
    setIsMinimize: (isMinimize: boolean) => void
}

const WindowMenu = (props: Props) => {
    const { setIsMinimize } = props

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
                    onClick={(e) => setIsMinimize(true)}
                />
            </ConfigProvider>
        </div>
    );
};

export default WindowMenu;