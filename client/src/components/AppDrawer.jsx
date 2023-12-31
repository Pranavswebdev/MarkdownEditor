import React, { useState } from "react";
import { Button, Drawer, List, Typography } from "antd";

const { Title, Paragraph, Text, Link } = Typography;
const AppDrawer = () => {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  const markdownSyntax = [
    { text: "Heading", markdown: "# H1\n## H2\n### H3" },
    { text: "Bold", markdown: "**bold text**" },
    { text: "Italic", markdown: "*italicized text*" },
    { text: "Blockquote", markdown: "> blockquote" },
    {
      text: "Ordered List",
      markdown: "1. First item\n2. Second item\n3. Third item",
    },
    {
      text: "Unordered List",
      markdown: "- First item\n- Second item\n- Third item",
    },
    { text: "Code", markdown: "`code`" },
    { text: "Horizontal Rule", markdown: "---" },
    { text: "Link", markdown: "[title](https://www.example.com)" },
  ];

  return (
    <>
      <Button type="primary" onClick={showDrawer}>
        Markdown syntax
      </Button>
      <Drawer
        title="Markdown Editor Basic Syntax"
        placement="right"
        size="small"
        closable={true}
        onClose={onClose}
        visible={open}
      >
        <List
          dataSource={markdownSyntax}
          renderItem={(item) => (
            <List.Item>
              <Title level={4}>{item.text} -</Title>
              <Paragraph type={item.type}> {item.markdown}</Paragraph>
            </List.Item>
          )}
        />
      </Drawer>
    </>
  );
};
export default AppDrawer;
