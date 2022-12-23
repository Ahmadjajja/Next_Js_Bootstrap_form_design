import Link from "next/link";
import { Layout } from "antd";
import styles from "../../styles/firstPage.module.css";   
import "bootstrap/dist/js/bootstrap.bundle"

const { Sider, Content } = Layout;

export default function FirstPost() {  
  return (
    <div>
      <Layout>
        <Layout>
          <Content>
          <h4 class={styles.heading}>Your booking information</h4 >
          </Content>
        </Layout>
        <Layout>
          <Sider>Sider</Sider>
          <Content>Content</Content>
        </Layout>
        <Layout>
          <Content>Content</Content>
        </Layout>
      </Layout>
      
      <style jsx>{`

      `}</style>
    </div>
  );
}
